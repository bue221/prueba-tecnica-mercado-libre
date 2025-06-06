// src/database/json-database.service.ts
import * as fs from 'fs';
import * as path from 'path';

export class JsonDatabaseService<T extends { id: number }> {
  private filePath: string;

  constructor(private entityName: string) {
    this.filePath = path.resolve(__dirname, '../../data', `${entityName}.json`);
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  private read(): T[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as T[];
  }

  private write(data: T[]) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  findAll(): T[] {
    return this.read();
  }

  findOne(id: number): T | undefined {
    return this.read().find((item) => item.id === id);
  }

  create(item: Omit<T, 'id'>): T {
    const data = this.read();
    const newItem = { id: Date.now(), ...item } as T;
    data.push(newItem);
    this.write(data);
    return newItem;
  }

  update(id: number, updated: Partial<T>): T | null {
    const data = this.read();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) return null;
    data[index] = { ...data[index], ...updated };
    this.write(data);
    return data[index];
  }

  remove(id: number): boolean {
    const data = this.read();
    const newData = data.filter((item) => item.id !== id);
    if (newData.length === data.length) return false;
    this.write(newData);
    return true;
  }
}

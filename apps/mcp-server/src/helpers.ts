import fetch  from 'node-fetch'

// Helper function for making NWS API requests
export async function makeRequest<T>(url: string,config?: any): Promise<T | null> {
    const headers = {
      Accept: "application/json",
      "x-api-key": "1234",
    };
  
    try {
      const response = await fetch(url, { headers, ...config });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return (await response.json()) as T;
    } catch (error) {
      console.error("Error making request:", error);
      return null;
    }
  }
  
export interface AlertFeature {
    properties: {
      event?: string;
      areaDesc?: string;
      severity?: string;
      status?: string;
      headline?: string;
    };
  }
  
  // Format alert data
export function formatAlert(feature: AlertFeature): string {
    const props = feature.properties;
    return [
      `Event: ${props.event || "Unknown"}`,
      `Area: ${props.areaDesc || "Unknown"}`,
      `Severity: ${props.severity || "Unknown"}`,
      `Status: ${props.status || "Unknown"}`,
      `Headline: ${props.headline || "No headline"}`,
      "---",
    ].join("\n");
  }
  
  export interface ForecastPeriod {
    name?: string;
    temperature?: number;
    temperatureUnit?: string;
    windSpeed?: string;
    windDirection?: string;
    shortForecast?: string;
  }
  
  export interface AlertsResponse {
    features: AlertFeature[];
  }
  
  export interface PointsResponse {
    properties: {
      forecast?: string;
    };
  }
  
  export interface ForecastResponse {
    properties: {
      periods: ForecastPeriod[];
    };
  }
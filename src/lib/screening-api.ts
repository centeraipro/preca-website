import type { ScreeningRequest, ScreeningResponse } from "@/types/service";

const SCREENING_API_URL = "https://preca.admin.centerai.cloud/api/public/screenings";

export async function createScreening(data: ScreeningRequest): Promise<ScreeningResponse> {
  const response = await fetch(SCREENING_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create screening");
  }

  return response.json();
}

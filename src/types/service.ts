export interface FormField {
  id: string;
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "number" | "boolean" | "file";
  required: boolean;
  placeholder?: string;
  order: number;
}

export interface FormSchema {
  version: string;
  fields: FormField[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  priceMxn: number;
  formattedPrice: string;
  formSchema: FormSchema;
}

export interface ScreeningRequest {
  serviceId: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  advisorId?: string;
  advisorName?: string;
  advisorPhone?: string;
  formData: Record<string, string | boolean>;
}

export interface ScreeningResponse {
  paymentLinkUrl: string;
}

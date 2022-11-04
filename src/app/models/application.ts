export interface ApplicationData {
  label: string;
  name: string;
  InputType?: string;
  value: any;
  options?: any[];
  validations?: Validator[];
}

export interface Validator {
  name: string;
  validator: any;
  message: string;
  minLength?: boolean;
  maxLength?: boolean;
  errormaxLength: string;
  maxLengtherror: string;
}

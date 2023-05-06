import { join } from "../src/modules/join";
declare module "remember-class" {
  export function join(option: string | Record<string, boolean>, options?: string | Record<string, boolean>): string;
  export function haveRepeatedClasses(option: string | string[]): boolean;
  export function has(option: string | string[], revalidate: string | string[]): boolean;
}
export default join;

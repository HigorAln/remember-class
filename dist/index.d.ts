import { JoinProps } from "../src/modules/join";

declare module "remember-class" {
  export function join(option: JoinProps["class"], options?: JoinProps['options']): string;
  export function haveRepeatedClasses(option: string | string[]): boolean;
  export function has(option: string | string[], revalidate: string | string[]): boolean;
}
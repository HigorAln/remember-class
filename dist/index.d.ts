import { join } from "../src/modules/join";
declare module "remember-class" {
  export function join(option: string | Record<string, boolean>, options?: string | Record<string, boolean>): string;
  export function haveRepeatedClasses(option: string | string[]): boolean;
  export function has(option: string | string[], revalidate: string | string[]): boolean;
  // export default function join(option: string | Record<string, boolean>, options?: string | Record<string, boolean>): string;
}
// export to default of the class join
export default join;

/**
 * JOIN
 * ('foo', { bar: true }) => 'foo bar'
 * ('foo', 'bar') => 'foo bar'
 * ({ 'foo-bar': true }) => 'foo-bar'
 * ({ 'foo-bar': false }) => ''
 * ({ foo: true }, { bar: true }) => 'foo bar'
 * ({ foo: true, bar: true }) => 'foo bar'
 * ('foo', { bar: true, duck: false }, 'baz', { quux: true }) => 'foo bar baz quux'
 * 
 * 
 * HAVE REPEATED CLASSES
 *  ('foo foo') => true
 * ('foo bar') => false
 * ('foo foo bar') => true
 * ('foo bar foo') => true
 * 
 * 
 * HAS
 * ('foo', 'foo') => true
 * ('foo', 'bar') => false
 * ('foo bar', 'bar') => true
 * ('foo bar', 'baz') => false
 * ('foo bar', ['bar', 'baz']) => true
 * ('foo bar', ['baz', 'qux']) => false
 */
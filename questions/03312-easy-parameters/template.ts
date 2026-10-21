type MyParameters<T extends (...args: any[]) => void> = T extends (...any: infer A) => void ? A : []

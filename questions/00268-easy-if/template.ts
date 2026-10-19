type If<C, T, F> = C extends true ? T : C extends false ? F : C extends boolean ? T | F : never

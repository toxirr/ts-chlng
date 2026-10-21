type MyPick<T, K> = { [Key in keyof T as K extends Key ? Key : never]: T[Key] }

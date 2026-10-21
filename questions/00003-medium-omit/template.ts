type MyOmit<T extends object, K> = { [Key in keyof T as Key extends K ? never : Key]: T[Key] }

interface Todo {
  title: string
  description: string
  completed: boolean
}

type Test = MyOmit<Todo, 'description'>

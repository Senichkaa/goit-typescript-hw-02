/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropsOfT {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PropsOfT> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

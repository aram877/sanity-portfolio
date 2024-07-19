type ListItem = {
  title: string;
  text: string;
}

export type AboutMe = {
    _id: string;
    _createdAt: Date;
    headline: string;
    intro: string;
    image: string;
    list: ListItem[];
  };
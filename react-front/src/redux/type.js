//@flow
export type Action = {
  type: string,
  payload: string
};

export type Projects = {
  src: string,
  url: string,
  title: string,
  id: number
}

export type Repos = {
  html_url: string,
  id: number
}

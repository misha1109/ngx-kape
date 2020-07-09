// TODO: change to fs readfile async
export default function ( config ) {
  return require(`../config/${config}.config.json`)['data'];
}

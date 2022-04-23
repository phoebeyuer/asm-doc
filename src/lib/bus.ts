import mitt from 'mitt'

type Events = {
  test: string
}

const bus = mitt<Events>()

export default bus

import Article from './article'
import Comments from './comments'
import Classify from './classify'
import User from './user'

export default function (app) {
  app.use('/api', Article)
  app.use('/api', Comments)
  app.use('/api', Classify)
  app.use('/api', User)
}
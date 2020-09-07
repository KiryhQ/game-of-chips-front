import Combo from '../Combo'
import Straight from './Straight'
class StraightFlush extends Combo {
  static isAvailable(cards) {
    return Straight.isAvailable(cards) && Flush.isAvailable(cards)
  }
}
export default StraightFlush
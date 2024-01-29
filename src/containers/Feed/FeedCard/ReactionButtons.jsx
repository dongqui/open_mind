import { ThumbDownIcon, ThumbUpIcon } from '../../../components/Icons';
import Row from '../../../components/Row';
import Text from '../../../components/Text';

export default function ReactionButtons({ likeCount, disLikeCount }) {
  return (
    <Row $gap={32}>
      <button>
        <Row $gap={6}>
          <ThumbUpIcon />
          <Text color="gray40" typhography="caption-1-m">
            좋아요 {likeCount}
          </Text>
        </Row>
      </button>
      <button>
        <Row $gap={6}>
          <ThumbDownIcon />
          <Text color="gray40" typhography="caption-1-m">
            싫어요 {disLikeCount}
          </Text>
        </Row>
      </button>
    </Row>
  );
}

import { ThumbDownIcon, ThumbUpIcon } from 'components/Icons';
import Row from 'components/Row';
import Text from 'components/Text';
import { postReactionApi } from 'apis';
import { useQuestiuons } from 'hooks/questionsHooks';

export default function ReactionButtons({ likeCount, dislikeCount, questionId }) {
  const { updateQuestion } = useQuestiuons();
  const handleClickLikeOrDislike = (type) => async () => {
    const newQuestion = await postReactionApi(questionId, type);
    updateQuestion(questionId, newQuestion);
  };

  return (
    <Row $gap={32}>
      <button onClick={handleClickLikeOrDislike('like')}>
        <Row $gap={6}>
          <ThumbUpIcon isActive={!!likeCount} />
          <Text color={likeCount ? 'blue50' : 'gray40'} typhography="caption-1-m">
            좋아요 {likeCount}
          </Text>
        </Row>
      </button>
      <button onClick={handleClickLikeOrDislike('dislike')}>
        <Row $gap={6}>
          <ThumbDownIcon isActive={!!dislikeCount} />
          <Text color={dislikeCount ? 'red50' : 'gray40'} typhography="caption-1-m">
            싫어요 {dislikeCount}
          </Text>
        </Row>
      </button>
    </Row>
  );
}

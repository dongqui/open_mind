import Row from '../../components/Row';
import Column from '../../components/Column';
import Text from '../../components/Text';
import Avatar from '../../components/Avatar';

import { useSubject } from '../../hooks/useSubject';

export default function Answer({ content }) {
  const [subject] = useSubject();
  return (
    <Row $gap={12} $alignItems="start">
      <Avatar imgUrl={subject?.imageSource} size={32} />
      <Column $gap={4}>
        <Row $gap={8}>
          <Text typhography="body-2-bold">{subject?.name}</Text>
          <Text color="gray40" typhography="caption-1-m">
            2주전
          </Text>
        </Row>
        <Text typhography="body-2-bold">{content}</Text>
      </Column>
    </Row>
  );
}

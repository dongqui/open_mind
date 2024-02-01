import Dropdown from 'components/Dropdown';
import Row from 'components/Row';

export default function SubjectsOrderDropdown() {
  return (
    <Dropdown>
      <Dropdown.Header>
        <Row gap={4}>
          이름순
          <img src="/assets/images/arrow-down.svg" alt="arrow" />
        </Row>
      </Dropdown.Header>
      <Dropdown.Menu>
        <Dropdown.Item>이름순</Dropdown.Item>
        <Dropdown.Item>최신순</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

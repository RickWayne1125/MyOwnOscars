import Cell from "./Cell";
import { Col, Row } from "antd";

const awards = [
  "BEST MOVIE",
  "BEST STORY",
  "BEST ACTOR (LEADING)",
  "BEST ACTRESS (LEADING)",
  "BEST ACTOR (SUPPORTING)",
  "BEST ACTRESS (SUPPORTING)",
  "BEST MUSIC",
  "BEST PICTURE",
  "BEST VISUAL EFFECTS",
  "MOST HEARTWARMING",
  "MOST INSPIRING",
  "MOST THRILLING",
];

const AwardGrid = () => {
  return (
    <div className="grid">
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="bottom"
      >
        {awards.map((award) => (
          <Col span={6} key={award}>
            <Cell awardName={award} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AwardGrid;

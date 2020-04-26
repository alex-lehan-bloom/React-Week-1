function MissionStatement(props) {
  {
    props.text.split("\n").map(function (item, key) {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      );
    });
  }
}

export default MissionStatement;

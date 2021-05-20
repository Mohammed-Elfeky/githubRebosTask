import style from "./SingleRepository.module.css";
import numeral from "numeral";
import turnIntoMomemntFormat from '../../helpers/turnIntoMomemntFormat'
import moment from 'moment'
function SingleRepository({ item }) {
  return (
    <div className={style.SingleRepository}>
      {/* left part */}
      <div className={style.leftPart}>
        <img src={item.owner.avatar_url} alt="" />
      </div>

      {/* rigth part */}
      <div className={style.rightPart}>
        {/* name */}
        <div className={style.Name}>{item.name}</div>

        {/* description */}
        <div className={style.description}>{item.description}</div>

        {/* bottomPart */}
        <div className={style.bottomPart}>
          {/* stars */}
          <div className={style.stars}>Starts: {item.stargazers_count > 1000 ? numeral(item.stargazers_count).format('0 a') :item.stargazers_count }</div>

          {/* issues */}
          <div className={style.issues}>Issues: {item.open_issues_count}</div>

          {/* time */}
          <div className={style.time}>submitted {moment(turnIntoMomemntFormat(item.pushed_at), "YYYYMMDD").fromNow()} by {item.name}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleRepository;

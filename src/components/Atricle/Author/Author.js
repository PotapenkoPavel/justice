import Avatar from "../../Avatar/Avatar";
import './Author.sass'

export default function Author({ author }) {
    return <div className="author">
        <Avatar name={author.name} url={author.avatar_url} size="small"/>
        <div className="author__name">{author.name}</div>
    </div>;

}
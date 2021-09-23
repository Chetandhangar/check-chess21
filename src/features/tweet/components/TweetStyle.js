import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 550,
      height : 190
    },
    rootTweet: {
        maxWidth: 580,
      },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    paper: {
        marginTop: theme.spacing(4),
        alignItems: 'center',
      },
      btnTweet : {
        marginLeft: 'auto',
      }
  }));

  export default useStyles;

/*<div className="container">
<div className="card">
    <div className="row">
        <div className="col">
            <Link to={`/profile/${tweet?.user?.username}`}>
                <img 
                style={{height: 30, width : 30, cursor : "pointer"}}
                    className="rounded-circle rounded-sm inline-block" 
                    src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                    alt="profile"
                    />
            </Link>
        </div>
        <div className="col">
            <Link to={`/profile/${tweet?.user?.username}`}
            className="bg-light text-dark"
            >
            <span>{tweet?.user?.firstName}{" "}{tweet?.user?.lastName}</span>
            </Link>
           
        </div>
        <div className="col">
        <Link to={`/profile/${tweet?.user?.username}`}
            className="bg-light text-dark"
            >
            <span className="card-subtitle">@{tweet?.user?.username}</span>
            </Link>
        </div>
        <div className="col">
            .{formatDate(tweet?.createdAt)}
        </div>
    </div>
    <div className="text-center"
    style={{paddingTop : "2rem"}}>
        <p>{tweet?.tweet}</p>
    </div>
    <div className="text-center">
        <div className="text-center">
            {!checkLikes(currentUser?.liked, tweet?._id) ? (
                  <button 
                  className="btn bg-transparent"
                  style={{cursor : "pointer"}}
                  onClick={() => dispatch(handleToggleLikeSubmit({id :tweet?._id,token}))}
                  >
                  <span
                  className="fa fa-heart-o fa-sm"
                  aria-hidden="true"
                    >{tweet?.likesCount}</span>
                  </button>
            )  :
            (
                <button
                 className="btn bg-transparent"
                 onClick={() => dispatch(handleToggleLikeSubmit({id :tweet?._id,token}))}
                 >
               <span
               className="fa fa-heart fa-sm"
               aria-hidden="true"
               >{tweet?.likesCount}</span>
               </button>

            )
        }
      
      {
          !checkBookmarks(currentUser?.bookmarked, tweet?._id) ? (
            <button 
            className="btn bg-transparent"
            onClick={() => dispatch(handleToggleBookMark({id : tweet?._id, token}))}
            ><span
            className="fa fa-bookmark-o" aria-hidden="true"></span>
            </button>
          ) : 
          <button 
            className="btn bg-transparent"
            onClick={() => dispatch(handleToggleBookMark({id : tweet?._id, token}))}>
            <span
            className="fa fa-bookmark" aria-hidden="true"></span>
            </button>
      }
        
        </div>
   
        
    </div>
</div>
</div>
*/
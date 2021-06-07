class UsersApiComponent extends React.Component {
    componentDidMount(){
        componentDidMount() {
            axios
              .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
              )
              .then((response) => {
                this.props.setUsers(response.data.items);
        
                this.props.setTotalUserCount(response.data.totalCount);
              });
          }
    }
}

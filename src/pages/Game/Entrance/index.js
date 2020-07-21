import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Button } from 'antd';
import { history } from '../../../redux/store';
import EntranceContainer from '../../../containers/Game/Entrance';
import { getListRoomAction } from '../../../redux/room/actions';
import { EntranceGamePageWrapper } from '../styles';

const { Header, Content } = Layout;

export default function EntrancePage(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.room);
  useEffect(() => {
    dispatch(
      getListRoomAction({
        filter: JSON.stringify({ code: props.location.state.code }),
      })
    );
  }, [dispatch]);

  return (
    <EntranceGamePageWrapper>
      <Layout className="entrance-layout">
        <Header className="entrance-header">
          <Button className="exit-btn" onClick={() => history.push('/join')}>
            X
          </Button>
        </Header>
        <Content className="entrance-content">
          {data.rooms.length > 0 ? (
            <EntranceContainer data={data.rooms[0]} />
          ) : (
            <div className="error-section">
              <div className="content">
                This room is not available. Try again!
              </div>
              <Button
                className="return-btn"
                onClick={() => history.push('/join')}
              >
                Back
              </Button>
            </div>
          )}
        </Content>
      </Layout>
    </EntranceGamePageWrapper>
  );
}

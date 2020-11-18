import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './ChatItem.styles';

const ChatItem = () => {
    return (
        <View style={styles.chatList}>
            <Text>Future ChatItem Component</Text>
        </View>
    );
};

ChatItem.propTypes = {
    avatar: PropTypes.string,
    avatarFlexible: PropTypes.bool,
    alt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    dateString: PropTypes.string,
    unread: PropTypes.number,
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    statusColor: PropTypes.string,
    statusColorType: PropTypes.oneOf(['encircle', 'badge']),
    statusText: PropTypes.string,
    lazyLoadingImage: PropTypes.string,
};

ChatItem.defaultProps = {
    avatar: '',
    avatarFlexible: false,
    alt: '',
    title: '',
    subtitle: '',
    date: new Date(),
    dateString: '',
    unread: 0,
    onClick: () => {},
    onContextMenu: () => {},
    statusColor: '',
    statusColorType: 'badge',
    statusText: '',
    lazyLoadingImage: '',
};

export default ChatItem;

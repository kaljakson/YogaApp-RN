import React from 'react'
import { Text, View } from 'react-native'
import styles from './BusinessScreenStyle'

import Icon from 'react-native-vector-icons/Ionicons'
import { SectionGrid } from 'react-native-super-grid'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import Colors from '../../Theme/Colors'

import {STRINGS} from '../../Config'

function Item({ item: { title, icon, color, onPressHandler } }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPressHandler}>
      <Icon name={icon} size={30} color={color} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default class BusinessScreen extends React.Component {

  //'工作台' session handlers
  go2AgentMission = () => {
    this.props.navigation.navigate('WishingWall');
  }
  go2PersonalEducation = () => {
    this.props.navigation.navigate('PersonalEducation');
  }
  go2ScanCode = () => {
    this.props.navigation.navigate('ScanCode');
  }
  go2YogaHeadline = () => {
    this.props.navigation.navigate('YogaHeadline');
  }
  go2Configuration = () => {
    this.props.navigation.navigate('Configuration');
  }
  go2ExperienceManagement = () => {
    this.props.navigation.navigate('ExperienceManagement');
  }

  DATA = [
    {
      title: '营销管理', //'工作台',
      data: [
        {
          title: '许愿墙', //'代约团课' AgentMission
          icon: 'ios-heart-dislike',
          color: Colors.iconYellow,
          onPressHandler: this.go2AgentMission,
        },
        {
          title: '闺蜜同行', //'代约私教' PersonalEducation
          icon: 'md-body',
          color: Colors.iconPink,
          onPressHandler: this.go2PersonalEducation,
        },
        {
          title: '拼团活动', //'扫码签到' ScanCode
          icon: 'ios-chatbubbles',
          color: Colors.iconGreen,
          onPressHandler: this.go2ScanCode,
        },
        {
          title: '秒杀活动', //'瑜伽头条' YogaHeadline
          icon: 'ios-boat',
          color: Colors.iconFire,
          onPressHandler: this.go2YogaHeadline,
        },
        {
          title: '砍价活动', //'小程序配置' Configuration
          icon: 'md-color-filter',
          color: Colors.iconYellow,
          onPressHandler: this.go2Configuration,
        },
        {
          title: '分销售卡', //'体验课管理' ExperienceManagement
          icon: 'md-card',
          color: Colors.iconPink,
          onPressHandler: this.go2ExperienceManagement,
        },
        {
          title: '裂变分销', //'代约团课' AgentMission
          icon: 'ios-git-network',
          color: Colors.iconYellow,
          onPressHandler: this.go2AgentMission,
        },
        {
          title: '短信管理', //'代约私教' PersonalEducation
          icon: 'ios-chatboxes',
          color: Colors.iconPink,
          onPressHandler: this.go2PersonalEducation,
        },
        {
          title: '生成海报', //'扫码签到' ScanCode
          icon: 'md-filing',
          color: Colors.iconGreen,
          onPressHandler: this.go2ScanCode,
        },
        {
          title: '优惠券', //'瑜伽头条' YogaHeadline
          icon: 'md-tv',
          color: Colors.iconFire,
          onPressHandler: this.go2YogaHeadline,
        },
        {
          title: '视频课程', //'小程序配置' Configuration
          icon: 'md-phone-landscape',
          color: Colors.iconYellow,
          onPressHandler: this.go2Configuration,
        },
        {
          title: '提现说明', //'体验课管理' ExperienceManagement
          icon: 'md-filing',
          color: Colors.iconPink,
          onPressHandler: this.go2ExperienceManagement,
        },
        {
          title: '活动报名', //'体验课管理' ExperienceManagement
          icon: 'ios-rocket',
          color: Colors.iconPink,
          onPressHandler: this.go2ExperienceManagement,
        },
      ],
    },
    {
      // title: STRINGS.Member + '/' + STRINGS.Visitor + STRINGS.Manage, //'会员/访客管理',
      title: '分销商城',
      data: [
        {
          title: '扫码核销', //'会员',
          icon: 'md-cut',
          color: Colors.iconYellow,
        },
        {
          title: '代理商品', //'访客',
          icon: 'md-gift',
          color: Colors.iconPink,
        },
        {
          title: '我的佣金', //'会员卡',
          icon: 'md-business',
          color: Colors.iconGreen,
        },
      ],
    },
  ]

  render() {
    return (
      <ScrollView>   
        <View style={styles.container}>
          <SectionGrid
            itemDimension={70}
            sections={this.DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item item={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </View>
      </ScrollView>
    )
  }
}

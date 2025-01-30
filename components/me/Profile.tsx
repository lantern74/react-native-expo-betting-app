import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, FontAwesome5    } from '@expo/vector-icons';

const Profile = () => {
  const [isVisible, setIsVisible] = useState(true); // State for balance visibility

  return (
    <>
        <View style={styles.profileTop}>
            <View style={styles.profileBalance}>
                <Text style={styles.balanceText}>結餘</Text>
                <TouchableOpacity
                    style={styles.profileButton}
                    onPress={() => setIsVisible(!isVisible)} // Toggle visibility
                >
                    <FontAwesome 
                        name={isVisible ? 'eye-slash' : 'eye'} // Change icon dynamically
                        size={18}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.balance}>{isVisible ? '$*****' : '$500'}</Text>
            <Text style={styles.account}>投注戶口號碼: 15339692</Text>
        </View>
        <View style={styles.profileCenter}>
            <View style={styles.profileCenterDiv}>
                <View style={styles.profileCenterBox}>
                    <MaterialCommunityIcons 
                        name='bank-transfer' 
                        size={28} 
                        color="white" 
                        style={styles.iconBackground} 
                    />
                    <Text style={styles.myCouponsText}>轉賬服務</Text>
                </View>
                <View style={styles.profileCenterBox}>
                    <FontAwesome 
                        name='list' 
                        size={28} 
                        color="white" 
                        style={styles.iconBackground} 
                    />
                    <Text style={styles.myCouponsText}>是次交易紀錄</Text>
                </View>
                <View style={styles.profileCenterBox}>
                    <FontAwesome 
                        name='book' 
                        size={28} 
                        color="white" 
                        style={styles.iconBackground} 
                    />
                    <Text style={styles.myCouponsText}>戶口紀錄</Text>
                </View>
            </View>
        </View>
        <View style={styles.profileBottom}>
            <Text style={styles.myHkjc}>我的HKJC</Text>
            <View style={styles.myCouponsBox}>
                <View style={styles.iconContainer}>
                  <FontAwesome5 name="ticket-alt" size={14} color="white" />
                </View> 
                <Text style={styles.myCouponsText}>我的優惠券</Text>
            </View>
            <View style={styles.suggestion}>
                <View style={styles.suggestionView}>
                    <MaterialCommunityIcons name="message-text" size={24} color="#191970" />
                    <Text style={styles.suggestionText}>意見/建議</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
            </View>
            <TouchableOpacity style={styles.logout}>
                <Text style={styles.logoutText}>登出</Text>
            </TouchableOpacity>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  profileTop: {
    backgroundColor: '#4169E1',
    paddingHorizontal: 30,
    paddingBottom: 80
  },
  profileBalance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    padding: 10,
  },
  balanceText: {
    fontSize: 16,
    color: '#fff'
  },
  balance: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  account: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10
  },
  profileCenter: {
    flexDirection: 'row',
    marginHorizontal: 15,
    backgroundColor: 'transparent',
    marginTop: -60
  },
  profileCenterDiv: {
    width: '100%',
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 10,
    paddingHorizontal: 0,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileCenterBox: {
    width: '33%',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
  iconBackground: {
    backgroundColor: 'black', 
    padding: 12,
    borderRadius: 50,
  },
  profileBottom: {
    height: '100%',
    paddingHorizontal: 15,
    marginTop: 15
  },
  myHkjc: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000'
  },
  myCouponsBox: {
    width: '50%', 
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 10,
    marginTop: 10,
    padding: 15
  },
  iconContainer: {
    width: 25,
    height: 25,
    backgroundColor: '#FFD700', // Yellow background
    borderRadius: 50, // Circular shape
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  myCouponsText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
    color: '#555'
  },
  suggestion: {
    width: '100%', 
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 10,
    marginTop: 25,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  suggestionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10
  },
  suggestiondropIcon: {
    fontSize: 20,
    fontWeight: 800,
    color: '#000',
  },
  logout: {
    width: '100%', 
    borderWidth: 0,
    borderRadius: 40,
    backgroundColor: '#fff',
    marginTop: 25,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#191970',
  }
  
});

export default Profile;

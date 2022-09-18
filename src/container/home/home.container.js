import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { 
    Text, 
    View, 
    Image, 
    FlatList, 
    Pressable, 
} from "react-native"

import {
    Header,
    LoadingView
} from '../../component'

import { styles } from './home.style'

const Home = () => {
    const [us, setUs] = useState(0)
    const [total, setTotal] = useState(0)
    const [keyId, setKeyId] = useState('')
    const [limit, setLimit] = useState(10)
    const [france, setFrance] = useState(0)
    const [filter, setFilter] = useState('')
    const [expan, setExpan] = useState(false)
    const [dataItem, setDataItem] = useState([])
    const [loadingScroll, setLoadingScroll] = useState(false)

    const _getAll = () => {
        axios({
            method: 'get',
            url: 'https://api.thecatapi.com/v1/breeds/',
        })
        .then(function (response) {
            setTotal(response.data.length)
            setUs(response.data.filter(e=>e.origin == 'United States').length)
            setFrance(response.data.filter(e=> e.origin == 'France').length)
        });
    }

    const _get = () => {
        if(filter) {
            axios({
                method: 'get',
                url: `https://api.thecatapi.com/v1/breeds/search/?q=${filter}`,
            })
            .then(function (response) {
                setLimit(10)
                setDataItem(response.data)
                setLoadingScroll(false)
            });
        } else {

            axios({
                method: 'get',
                url: `https://api.thecatapi.com/v1/breeds/?limit=${limit}`,
            })
            .then(function (response) {
                setDataItem(response.data)
                setLoadingScroll(false)
            });
        }
    }

    const onLoadMore = (e) => {
        if (total > limit && e.distanceFromEnd >= 0) {
            setLoadingScroll(true)
            setTimeout(() => {
                setLimit(limit+10)
            }, 4000)
        }
    }

    const renderFooter = () => {
        return loadingScroll ? (
          <View style={styles.indicatorContainer}>
            <LoadingView
              color='grey'
              size={30} />
          </View>
        ) : null
    }

    const renderItem = (item) => {
        return(
                <View style={ expan && item.id == keyId ? styles.containerRenderItemExpan : styles.containerRenderItem }>
                    <View style={{
                        flexDirection: 'row'
                    }}>

                        <View style={styles.photoCard}>
                            { item?.image?.url && (<Image
                                style={styles.tinyLogo}
                                source={{
                                uri: `${item.image.url}`,
                                }}
                            />)}
                        </View>
                        <Text style={{
                            width:90,
                            paddingLeft: 10
                        }}>{item.name}</Text>
                    </View>
                    {expan && item.id == keyId && (<View>
                        <Text>{`Country : ${item.origin}`}</Text>
                        <Text>{`Description : ${item.description}`}</Text>
                    </View>)}
                    <Pressable 
                    title={item.name}
                    onPress={()=> {
                        if(expan && item.id !== keyId) {
                            setKeyId(item.id)
                        } else {
                            setKeyId(item.id)
                            setExpan(!expan)
                        }
                    }} 
                    style={styles.cardName}
                    >
                        <Text style={styles.textName}>{expan && item.id == keyId ? 'View Less' : 'View More'}</Text>
                    </Pressable>
                </View>
        );
    }

    useEffect(() => {
        _getAll()
        _get()
      },[filter, limit]);
      

    return (
        <View style={styles.containerOut}>
            <Header 
            us={us}
            get={_get}
            total={total}
            france={france}
            filter={filter}
            setFilter={setFilter}
            setDataItem={setDataItem}
            dataItem={dataItem}
            />
            
            <FlatList 
                data={dataItem}
                numColumns={2}
                onEndThreshold={0}
                style={styles.containerScrollView}
                ListFooterComponent={renderFooter}
                onEndReached={(e) => onLoadMore(e)}
                keyExtractor={(item, index) =>  index.toString()}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
        </View>
    );
}
export default Home
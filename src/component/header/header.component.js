import React from 'react'
import { View, Text, TextInput } from "react-native"

import { styles } from './header.style'

const Header = (props) => {

    const onChangeFilter = (text) => {
        props.setFilter(text)
    }

    return (
        <View style={styles.containerOut}>
            <View style={styles.cardBorder}>
                <View style={styles.cardBackground}>
                    <View 
                    onPress={props.allPegawai}
                    style={styles.cardTotal}>
                        <Text style={styles.countTotal}>{props.total}</Text>
                        <Text style={styles.textTotal}>Total Cat</Text>
                    </View>
                    <View style={styles.cardUs}>
                        <Text style={styles.countUs}>{props.us}</Text>
                        <Text style={styles.textUs}>United States</Text>
                    </View>

                    <View style={styles.cardFrance}>
                        <Text style={styles.countFrance}>{props.france}</Text>
                        <Text style={styles.textFrance}>France</Text>
                    </View>
                </View>
            </View>
            <View>
                <TextInput
                    style={styles.filterInput}
                    onChangeText={onChangeFilter}
                    placeholder="Search by name"
                    keyboardType="default"
                />
            </View>
        </View>
    )
}
export default Header
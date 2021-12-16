import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';

export default function DrugInfo({route}){
    return(
        <View>
            <Text>{JSON.stringify(route.params.drug)}</Text>
        </View>
    );
}
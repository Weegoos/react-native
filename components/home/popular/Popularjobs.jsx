import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList,
ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router";
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard  from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch'
const PopularJobs = () => {
  const router = useRouter();
 

  const {data, isLoading, error} = useFetch(
    'search', {
      query: 'React developer',
      num_pages: 1
    }
  )
  console.log(data);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (data) {
      const jobData = data.map(item => ({
        companyName: item.company_name,
        jobTitle: item.job_title
      }));
      setJobs(jobData);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        <FlatList 
        data={['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook', 'Tesla', 'Netflix', 'Twitter', 'LinkedIn', 'Uber', 'Airbnb']}
          keyExtractor={item => item.toString()} 
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
          renderItem={({ item }) => (
            <PopularJobCard item={item} />
          )}
        />
      )}
    </View>
    </View>
  )
}

export default PopularJobs
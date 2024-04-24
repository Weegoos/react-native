import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>{item}</Text>

      <View style={styles.infoContainer}>
      <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>React developer</Text>
      <Text style={styles.location}>US</Text> 
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

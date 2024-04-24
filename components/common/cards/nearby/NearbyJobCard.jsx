import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import styles from './nearbyjobcard.style';

const NearbyJobCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false); 
  const [jobInfo, setJobInfo] = useState({
    "Frontend Developer": {
      explanation: "Frontend developers are responsible for creating the user interface and implementing the visual aspects of a website or application.",
      salary: "$800 - $900 per week",
      experience: "3 years",
      requirement: [
        'React, ', 'Webpack + Vite'
      ]
    },
    "Backend Developer": {
      explanation: "Backend developers work on server-side logic, database design, and integration, ensuring the smooth functioning of web applications.",
      salary: "$750 - $850 per week",
      experience: "7 years",
      requirement: [
        'Java, ', 'API'
      ]
    },
    "UI/UX Designer": {
      explanation: "UI/UX designers focus on enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and the product.",
      salary: "$700 - $800 per week",
      experience: "6 years",
      requirement: [
        'UI/UX design for IOS and Android'
      ]
    },
    "Software Engineer": {
      explanation: "Software engineers design, develop, maintain, and test software applications and systems to meet the needs of clients and users.",
      salary: "$700 - $850 per week",
      experience: "5 years",
      requirement: [
        'Big O Notation, ', 'Patterns'
      ]
    },
    "Cybersecurity Analyst": {
      explanation: "Cybersecurity analysts protect computer systems and networks from unauthorized access, cyberattacks, and security breaches.",
      salary: "$750 - $900 per week",
      experience: "4 years",
      requirement: [
        'Intrusion detection, ', ' Controls and frameworks'
      ]
    },
    "Full Stack Developer": {
      explanation: "Full stack developers are proficient in both front-end and back-end development, capable of working on all aspects of a web application.",
      salary: "$800 - $950 per week",
      experience: "5 years",
      requirement: [
        'React, ', 'Webpack + Vite, ', 'Java, ', 'API'
      ]
    },
    "Data Scientist": {
      explanation: "Data scientists analyze large datasets to identify trends, develop predictive models, and derive insights to inform business decisions.",
      salary: "$850 - $950 per week",
      experience: "4 years",
      requirement: [
        'SAS, ', 'SQL, ', 'Statistics and probability, ', 'Altair'
      ]
    },
    "Blockchain Developer": {
      explanation: "Blockchain developers design and implement blockchain-based solutions, including smart contracts, decentralized applications, and cryptocurrency systems.",
      salary: "$850 - $950 per week",
      experience: "4 years",
      requirement: [
        'TypeScript, ', 'JavaScript'
      ]
    },
    "Network Administrator": {
      explanation: "Network administrators manage and maintain an organization's computer networks, ensuring their reliability, security, and performance.",
      salary: "$700 - $850 per week",
      experience: "4 years",
      requirement: [
        'Installation and maintenance of computer and server equipment'
      ]
    },
    "AI/Machine Learning Engineer": {
      explanation: "AI/Machine Learning engineers develop algorithms and systems that enable computers to perform tasks that typically require human intelligence, such as recognizing patterns, making decisions, and learning from data.",
      salary: "$900 - $950 per week",
      experience: "10 years",
      requirement: [
        'Pandas, ', 'NumPy, ', 'Sklearn'
      ]
    }
  });
  const handlePress = (jobTitle) => {
    setSelectedJob(jobTitle);
    setModalVisible(true);
  };

  const showSuccessModal = () => {
    setSuccessModalVisible(true);
    setModalVisible(false);
  };

  const hideSuccessModal = () => {
    setSuccessModalVisible(false);
  };

  const submitApplication = () => {
    showSuccessModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("Frontend Developer")}>
        <Text style={styles.text}>Frontend Developer - KazDream</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("Backend Developer")}>
        <Text style={styles.text}>Backend Developer - Kaspi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("UI/UX Designer")}>
        <Text style={styles.text}>UI/UX Designer - ForteBank</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("Software Engineer")}>
        <Text style={styles.text}>Software Engineer - Halyk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("Cybersecurity Analyst")}>
        <Text style={styles.text}>Cybersecurity Analyst - Prime Source</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("Full Stack Developer")}>
        <Text style={styles.text}>Full Stack Developer - Speech Lab</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("Data Scientist")}>
        <Text style={styles.text}>Data Scientist - Sapa Software</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("Blockchain Developer")}>
        <Text style={styles.text}>Blockchain Developer - Platonus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("Network Administrator")}>
        <Text style={styles.text}>Network Administrator - Koleso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => handlePress("AI/Machine Learning Engineer")}>
        <Text style={styles.text}>AI/Machine Learning Engineer</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedJob}</Text>
            <Text style={styles.modalText}>{jobInfo[selectedJob]?.explanation}</Text>
            <Text style={styles.modalText}>Salary: {jobInfo[selectedJob]?.salary}</Text>
            <Text style={styles.modalText}>Work experience: {jobInfo[selectedJob]?.experience}</Text>
            <Text style={styles.modalText}>Requirements: {jobInfo[selectedJob]?.requirement}</Text>


            <TouchableOpacity onPress={submitApplication}>
              <Text style={styles.SubmitButton}>Submit an application</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={hideSuccessModal}
      >
        <View style={styles.topView}>
          <View style={styles.modalView}>
            <Text style={styles.successView}>Your application has been submitted successfully!</Text>
            <TouchableOpacity onPress={hideSuccessModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default NearbyJobCard

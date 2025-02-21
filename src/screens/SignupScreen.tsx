import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [jobSeekerEmail, setJobSeekerEmail] = useState('');
  const [password, setPassword] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [cvFile, setCvFile] = useState<string | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<string | null>(null);

  const addSkill = () => {
    if (skillInput.trim() && skills.length < 5) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // File picker without Base64 conversion
  const handleFileUpload = async (setFile: (file: string | null) => void) => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
      });
      setFile(res.uri);  // Store the file URI instead of converting to Base64
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled file picker');
      } else {
        console.error('File Picker Error:', err);
      }
    }
  };

  const handleSignup = async () => {
    if (!name || !surname || !jobSeekerEmail || !password || !industry || !location) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const userData = {
      name,
      surname,
      jobSeekerEmail,
      password,
      industry,
      location,
      skills,
      cv: cvFile,
      coverLetter: coverLetterFile,
    };

    try {
      const response = await fetch('http://10.0.2.2:8080/JobSwipeMobile/jobSeeker/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully!');
      } else {
        Alert.alert('Error', 'Signup failed.');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      Alert.alert('Error', 'Network issue, try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Please enter the following</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Surname" value={surname} onChangeText={setSurname} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={jobSeekerEmail} onChangeText={setJobSeekerEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Industry" value={industry} onChangeText={setIndustry} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />

      <View style={styles.skillsContainer}>
        <TextInput style={[styles.input, { flex: 1 }]} placeholder="Add a Skill (Max 5)" value={skillInput} onChangeText={setSkillInput} onSubmitEditing={addSkill} />
        <TouchableOpacity style={styles.addSkillButton} onPress={addSkill}>
          <Text style={styles.addSkillText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={skills}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={({ item, index }) => (
          <View style={styles.skillTag}>
            <Text style={styles.skillText}>{item}</Text>
            <TouchableOpacity onPress={() => removeSkill(index)}>
              <Text style={styles.removeSkill}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileUpload(setCvFile)}>
        <Text style={styles.uploadButtonText}>{cvFile ? 'CV Uploaded' : 'Upload CV'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileUpload(setCoverLetterFile)}>
        <Text style={styles.uploadButtonText}>{coverLetterFile ? 'Cover Letter Uploaded' : 'Upload Cover Letter'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#313CA1', padding: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginBottom: 20 },
  input: { backgroundColor: '#E0E0E0', borderRadius: 25, paddingHorizontal: 15, height: 50, marginBottom: 15, fontSize: 16 },
  skillsContainer: { flexDirection: 'row', alignItems: 'center' },
  addSkillButton: { backgroundColor: '#FFF', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  addSkillText: { fontSize: 20, fontWeight: 'bold', color: '#313CA1' },
  skillTag: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10, marginRight: 10, alignItems: 'center' },
  skillText: { color: '#313CA1', fontWeight: 'bold' },
  removeSkill: { color: 'red', marginLeft: 8, fontWeight: 'bold' },
  uploadButton: { backgroundColor: '#FFF', borderRadius: 25, height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 15 },
  uploadButtonText: { color: '#313CA1', fontSize: 16, fontWeight: 'bold' },
  signupButton: { backgroundColor: '#FFF', borderRadius: 25, height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  signupButtonText: { color: '#313CA1', fontSize: 18, fontWeight: 'bold' },
});

export default SignupScreen;

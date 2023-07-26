import React, { useState } from "react";
import 'react-phone-number-input/style.css'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { fetchPlace } from '../fetchPlace';
export const CustomerDetails = () => {
  const toast = useToast();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://travel-gixb.onrender.com/travelinfo", data);
      toast({
        title: "Your data added successfully",

        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e) => {
    const { name, value } = e.target;
    setCity(e.target.value);
    setData({ ...data, [name]: value });
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  return (
    <>
      <Navbar />
      <Heading as="h1" mb="8" textAlign="center">
        Travel Details
      </Heading>
      <Box
        maxW="md"
        mx="auto"
        mt="8"
        p="6"
        rounded="md"
        boxShadow="lg"
        bg="white"
      >
        <form onSubmit={submitForm}>
          <FormControl mb="4" isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              name="Name"
              onChange={handleChange}
              required
              placeholder="Enter full name"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              name="Email"
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel htmlFor="Phone">Phone</FormLabel>
            <Input
              name="Phone"
              onChange={handleChange}
              required
              placeholder="Enter Phone Number"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel>Where do you want to go?</FormLabel>
            <Input
            list="places"
            type="text"
            id="city"
            name="Destination"
            onChange={handleCityChange}
            value={city}
            required
            pattern={autocompleteCities.join("|")}
            autoComplete="off"
          />
          <datalist id="places">
            {autocompleteCities.map((city, i) => (
              <option key={i}>{city}</option>
            ))}
          </datalist>
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel>Interests</FormLabel>
            <Select
              placeholder="Interests?"
              name="Interests"
              onChange={handleChange}
            >
              <option value="Adventure & Outdoors">Adventure & Outdoors</option>
              <option value="Heritage & Culture">Heritage & Culture</option>
              <option value="Nature & Landscapes">Nature & Landscapes</option>
              <option value="Wildlife & Safaris">Wildlife & Safaris</option>
              <option value="Beaches">Beaches</option>
            </Select>
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel>No. of travellers</FormLabel>
            <Input
              type="number"
              name="No_of_travellers"
              onChange={handleChange}
              placeholder="enter number of travellers"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel>Budget per person </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              />
              <Input
                type="number"
                name="Budget"
                onChange={handleChange}
                placeholder="Enter your budget"
              />
            </InputGroup>
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel htmlFor="tripDuration">Trip_Duration</FormLabel>
            <Input
              type="text"
              name="Trip_Duration"
              onChange={handleChange}
              required
              placeholder="Enter your trip Duration"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel htmlFor="tripDate">Trip_Date</FormLabel>
            <Input
              type="text"
              name="Trip_Date"
              onChange={handleChange}
              required
              placeholder="Enter your trip Date"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel>Planning_Stage</FormLabel>
            <Select
              placeholder="Planning_Stage?"
              name="Planning_Stage"
              onChange={handleChange}
            >
              <option value="Still dreaming/researching">Still dreaming/researching</option>
              <option value="Definitely traveling, need destination expertise">Definitely traveling, need destination expertise</option>
              <option value="I want to book a trip">I want to book a trip</option>
            </Select>
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="Notes">Notes</FormLabel>
            <Input
              type="text"
              name="Notes"
              onChange={handleChange}
              required
              placeholder="Enter your Notes here"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            w="full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Box>
    </>
  );
};
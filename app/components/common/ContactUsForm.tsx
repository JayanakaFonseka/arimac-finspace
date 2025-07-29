"use client";

import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useState } from "react";

const inputStyle = {
  //forcused-label
  "& label.Mui-focused": {
    color: "#158D54",
  },
  //hover-label
  "&:hover label": {
    color: "#158D54",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    //normal-border
    "& fieldset": {
      borderColor: "#676767",
    },
    //hover-border
    "&:hover fieldset": {
      borderColor: "#158D54",
    },
    //focused-label
    "&.Mui-focused fieldset": {
      borderColor: "#158D54",
    },
  },
};

export const ContactUsForm = () => {
  const [countryCode, setCountryCode] = useState("+94");
  const [countryCodes, setCountryCodes] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd"
        );
        const data = await res.json();

        const formatted = data
          .filter((c: any) => c.idd?.root && c.idd?.suffixes?.length > 0)
          .map((c: any) => ({
            key: `${c.name.common}-${c.idd.root}${c.idd.suffixes[0]}`, // Unique key
            code: `${c.idd.root}${c.idd.suffixes[0]}`,
            label: c.name.common,
            flag: c.flags.png,
          }))
          .sort((a: any, b: any) => a.label.localeCompare(b.label));

        setCountryCodes(formatted);

        const defaultCode = formatted.find((c: any) => c.code === "+94");
        if (defaultCode) setCountryCode(defaultCode.code);
      } catch (error) {
        console.error("Failed to fetch countries", error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, newsletter: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      fullPhone: `${countryCode} ${formData.phone}`,
    };
    console.log("Submitted:", dataToSend);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="flex flex-col">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "660px",
          marginTop: "40px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
            sx={inputStyle}
          />

          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
            sx={inputStyle}
          />

          {/* <div className="flex flex-col"> */}
          <TextField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            sx={inputStyle}
          />
          {/* <FormControlLabel
              control={
                <Checkbox
                  checked={formData.newsletter}
                  onChange={handleCheckbox}
                  name="newsletter"
                  sx={{
                    color: "#000000",
                    "&.Mui-checked": {
                      color: "#158D54",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 24,
                    },
                  }}
                />
              }
              label="Enable newsletter"
              sx={{
                color: "#000000",
                marginBottom: -2,
              }}
            /> */}
          {/* </div> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: `1px solid ${isFocused ? "#79CC56" : "#676767"}`, // Focused or normal
              borderRadius: "8px",
              overflow: "hidden",
              height: "56px",
              transition: "border-color 0.2s ease",
              "&:hover": {
                borderColor: "#158D54",
              },
            }}
          >
            {/* Country Code Dropdown */}
            <FormControl
              sx={{
                minWidth: 130,
                height: "100%",
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  fontSize: "16px",
                  borderRight: "1px solid #979797",
                  px: 2,
                },
                "& fieldset": { border: "none" },
              }}
              fullWidth={false}
            >
              <Select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                renderValue={() => {
                  const selected = countryCodes.find(
                    (c) => c.code === countryCode
                  );
                  return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <img
                        src={selected?.flag}
                        alt={selected?.label}
                        width={24}
                        style={{ borderRadius: "2px" }}
                      />
                      <span>{selected?.code}</span>
                    </Box>
                  );
                }}
              >
                {countryCodes.map((country) => (
                  <MenuItem key={country.key} value={country.code}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <img src={country.flag} alt={country.label} width={24} />
                      <span>
                        {country.label} ({country.code})
                      </span>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Phone Input */}
            <TextField
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
              fullWidth
              required
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  px: 2,
                  py: 0,
                  height: "100%",
                  fontSize: "16px",
                  "&::placeholder": {
                    color: "#979797",
                  },
                },
              }}
              sx={{
                "& input::placeholder": {
                  color: "#979797",
                },
              }}
            />
          </Box>
        </div>
        <TextField
          name="message"
          label="How can we help?"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          required
          sx={{ ...inputStyle, marginTop: 4 }}
        />
        <button
          type="submit"
          className="px-4 py-3 bg-white text-[#158D54] font-normal text-lg rounded-full w-[227px] max-w-[227px] border-1 border-[#158D54] mt-10"
        >
          Submit
        </button>
      </Box>
    </div>
  );
};

import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const letterVariant = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.03,
    },
  }),
};

const blockVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Description = () => {
  const text1 =
    "A simple web application to detect malicious URLs using machine learning models.";
  const text2 = "by: Group 5";
  const text3 =
    "✅Prince Ajayi (215221) \n✅Peter Kayode (208077) \n✅Chidinma Nwatu (XXXXX) \n✅Precious Ogbolu (XXXXX) \n✅Blessing Akinrinola (XXXXX) \n✅Emmanuel Daniel (XXXXX)";

  const [showSecondBlock, setShowSecondBlock] = useState(false);
  const [showThirdBlock, setShowThirdBlock] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSecondBlock(true);
    }, 2000);

    setTimeout(() => {
      setShowThirdBlock(true);
    }, 3000);
  }, []);

  return (
    <Stack
      mx="auto"
      mb="50px"
      color="whiteAlpha.900"
      textAlign="center"
      bgColor="blackAlpha.800"
      px="10px"
    >
      <motion.div
        variants={blockVariant}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        {text1.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariant} custom={index}>
            {char}
          </motion.span>
        ))}
      </motion.div>

      {showSecondBlock && (
        <motion.div
          variants={blockVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {text2.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant} custom={index}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {showThirdBlock && (
        <motion.div
          variants={blockVariant}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {text3.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant} custom={index}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}
    </Stack>
  );
};

export default Description;

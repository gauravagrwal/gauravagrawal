import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export default function ThemeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            size={"sm"}
            variant={"ghost"} />
    );
}

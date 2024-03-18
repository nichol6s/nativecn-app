import { View, Image, Text } from "react-native"

import { Skills } from "@/components/Skills"
import { User } from "@/components/User"
import { Preferece } from "@/components/Preference"
import { Input } from "@/components/Input"

export function Profile(){
    return(
        <View className="flex-1 bg-gray-700">
            <Image 
            source={require("@/assets/banner.png")}
            className="w-full h-52 -mb-16"
            />

            <View className="flex-1 px-4 pb-4">
                <User />
                <Skills />
                <Preferece />
                
                <View className="w-full mt-6 flex-1">
                    <Input placeholder="Company" inputClasses="mb-6" label="Company"/>
                </View>
            </View>
        </View>
    )
}
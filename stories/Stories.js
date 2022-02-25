import { View, Text } from 'react-native';
import React from 'react';
import InstaStory from 'react-native-insta-story';

const data = [
    {
        user_id: 1,
        user_image: "https://www.citypng.com/public/uploads/preview/-51614789267tkc4gevuww.png",
        user_name: "Cryptonaline",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText:'Custom swipe text for this story',
                //onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    },
    {
        user_id: 2,
        user_image: 'https://www.citypng.com/public/uploads/preview/-51614789267tkc4gevuww.png',
        user_name: "Cryptonaline",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText:'Custom swipe text for this story',
                //onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText:'Custom swipe text for this story',
                //onPress: () => console.log('story 2 swiped'),
            }]
    },
    {
        user_id: 1,
        user_image: 'https://www.citypng.com/public/uploads/preview/-51614789267tkc4gevuww.png',
        user_name: "Cryptonaline",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText:'Custom swipe text for this story',
                //onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    },
    {
        user_id: 1,
        user_image: 'https://www.citypng.com/public/uploads/preview/-51614789267tkc4gevuww.png',
        user_name: "Cryptonaline",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText:'Custom swipe text for this story',
                //onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    },
    {
        user_id: 1,
        user_image: 'https://www.citypng.com/public/uploads/preview/-51614789267tkc4gevuww.png',
        user_name: "Cryptonaline",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText:'Custom swipe text for this story',
                //onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    },{
        user_id: 1,
        user_image: 'https://www.citypng.com/public/uploads/preview/-51614789267tkc4gevuww.png',
        user_name: "Cryptonaline",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText:'Custom swipe text for this story',
                //onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    },
    {
        user_id: 1,
        user_image: 'https://www.citypng.com/public/uploads/preview/-51614789267tkc4gevuww.png',
        user_name: "Cryptonaline",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText:'Custom swipe text for this story',
                //onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    }

];

const stories = () => {
  return (
    <View>
      <InstaStory data={data}
            avatarSize={80}
            unPressedBorderColor={'#11bbcc'}
            showAvatarText={false}
            duration={10}
            onStart={item => console.log(item)}
            onClose={item => console.log('close: ', item)}
            customSwipeUpComponent={<View>
                                <Text>Swipe</Text>
                            </View>}
            style={{marginTop: 30}}/>
    </View>
  )
}

export default stories
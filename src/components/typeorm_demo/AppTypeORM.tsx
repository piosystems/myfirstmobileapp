import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createConnection, getRepository, Connection, ConnectionOptions } from 'typeorm';

import { Category } from './entities/category';
import { Author } from './entities/author';
import { Post } from './entities/post';

//below workaround as per https://github.com/cmcnicholas/expotypeorm/blob/master/App.tsx
//import * as SQLite from 'expo-sqlite';
//(window as any).Expo = Object.freeze({ ...(window as any).Expo, SQLite });


interface IAppProps {

}

interface IAppState {
  progress: string;
  loadedPost: Post | null;
  savedPost: boolean
}

export default class AppTypeORM extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      loadedPost: null,
      progress: 'Post is being saved',
      savedPost: false,
    };
    this.runDemo();
  }

  /*
  connect() {
    return createConnection({
      database: "test",
      driver: require('expo-sqlite'),
      entities: [
          Author,
          Category,
          Post
      ],
      synchronize: true,
      type: "expo",
    });
  }
  */

 connectionOptions: ConnectionOptions = {
  database: "test",
      driver: require('expo-sqlite'),
      entities: [
          Author,
          Category,
          Post
      ],
      synchronize: true,
      type: "expo"
};

 connect: Promise<Connection> = createConnection(this.connectionOptions);


  async runDemo() {
    try{

      await this.connect;
    
      const category1 = new Category();
      category1.name = "TypeScript";

      const category2 = new Category();
      category2.name = "Programming";

      const author = new Author();
      author.name = "Person";

      const post = new Post();
      post.title = "Control flow based type analysis";
      post.text = "TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.";
      post.categories = [category1, category2];
      post.author = author;

      const postRepository = getRepository(Post);
      await postRepository.save(post);

      console.log("Post has been saved");
      this.setState({
        progress: "Post has been saved"
      });

      const loadedPost = await postRepository.findOne({where: {id: post.id}, relations: ["author", "categories"]});

      if (loadedPost) {
        console.log("Post has been loaded: ", loadedPost);
        this.setState({
          loadedPost: loadedPost
        });
      }

    }catch(error){
      console.log(error);
      alert(error);
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the Expo Example for TypeORM!
        </Text>
        <Text style={styles.small}>
          {this.state.progress}
        </Text>
        <Text style={styles.small}>
          {JSON.stringify(this.state.loadedPost)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  small: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
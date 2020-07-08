import React, { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
import { View } from 'react-native';

const db = SQLite.openDatabase("db.db");

type entry = {
    id: number, 
    date:string, 
    income: boolean, 
    expense: boolean, 
    description: string, 
    amount: number
}

const Component12 = () => {

    const getAllEntries = () => {

        return [{}];
    }

    const insertEntry = 
        (entry: entry) => {
            //see 
        }

    const deleteEntry = (id: number) => {

    }

    const getEntryById = (id: number) => {

    }

    const updateEntry = (entry: entry) => {

    }

    /*Syntax is 
        db.transaction(function(txn) {
            txn.executeSql(
                query,                 //Query to execute as prepared statement
                argsToBePassed[],      //Argument to pass for the prepared statement
                function(tx, res) {}   //Callback function to handle the result
            );
        });
        //See https://aboutreact.com/example-of-sqlite-database-in-react-native/
        //Below requires no arguments to be passed or callback function to handle the result
        //For date time use text. See https://www.sqlitetutorial.net/sqlite-date/


    */
    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql(
            `create table if not exists expenses(
                id integer primary key not null, 
                date text, 
                income integer, 
                expense integer, 
                description text, 
                amount real);`
          );
        });
      }, []);//run only once

    return(
        <View>
            
        </View>
    )

}

export default Component12;
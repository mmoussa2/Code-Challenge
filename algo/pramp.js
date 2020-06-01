
// https://coderpad.io/DEYXXDM9
//Thamer Allahabi

//Your previous JavaScript content is preserved below:

const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);



// Given an array of strings, group anagrams together.

//   Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]

/* 
Your previous Java content is preserved below:

import java.io.*;
import java.util.*;

/*
 Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 */




const groupAnagram = strs => {
  const map = {};

  for (let str of strs) {
    let key = [...str].sort()
    map[key] = map[key] ? [...map[key], str] : [str]
  }
  return Object.values(map)
};


let strss = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagram(strss));





// solution Java :
class Solution {
  public static void main(String[] args) {
   String [] arr = {"eat", "tea", "tan", "ate", "nat", "bat"};
    System.out.print(groupAnagram(arr));
  }

  public static List<List<String>> groupAnagram(String[] str){

    if(str == null || str.length == 0)return new ArrayList<>();
    Map<String, List<String>> map = new HashMap<>();
    for(String s : str){
      char [] ca = new char[26];
      for(char c : s.toCharArray())
        ca[c-'a']++;
      String key = String.valueOf(ca);
      if(!map.containsKey(key))map.put(key,new ArrayList<>());
      map.get(key).add(s);
    }

    return new ArrayList<>(map.values());
    }
}


// this is just anagram for two string"

  var anagram = function(s,t){
    if(s.length !== t.length ) return false;
    const map = {};
    for(let i = 0 ; i < s.length; i++){
      map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    for(let i = 0 ; i < t.length; i++){
     if(map[t[i]])map[t[i]]--;
       else return false;
     }
    return true;
  };

//console.log(groupAnagrams("ate", "tea"));
  console.log(anagram("atee", "tea"));

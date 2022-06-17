import React, {useState} from 'react'
import { SearchEmbed, useEmbedRef } from '@thoughtspot/visual-embed-sdk/react';

import {HostEvent} from '@thoughtspot/visual-embed-sdk';
export default function Search() {
    var embedRef = useEmbedRef();
    var searchString = "[Number of Policies] [Status].active [LOB Type] [Date].yearly [LOB Type].'Bank'"
    function injectString(){
        embedRef.current.trigger(HostEvent.Search, {
        searchQuery: searchString
        });
    }
    return (
       <div>
            <div onClick={injectString}>Inject String</div>
           <SearchEmbed ref={embedRef} dataSources={'91b1e47b-6d63-461d-a930-5e19625f1a94'} frameParams={{hideDataSources: "true", height: "80vw"}} />
       </div>
   )
}
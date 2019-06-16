<?php

   require_once ("silpa_comp.php");

    // Set the max number of suggestions to return at a time.
    define('MAX_SUGGESTIONS', 10);

   // Set whether to use a personal dictionary.
   $usePersonalDict = false;

  //Set whether users are allowed to update the personal dictionary.
  $editablePersonalDict = false;
  
   // Create Silpa Object
   $silpa_spell_module = silpaspell_create();

   switch($_POST['action'])
   {
       case 'spellcheck':
             spellChecks($_POST['spellText']);
	     break;

       case 'suggest':
             getSuggestions($_POST['suggestionText']);
             break;

       default:
             echo "Unknown error";
	     break;
   }


   function spellChecks($text)
   {
       global $silpa_spell_module;

       //make all the returns in the text look the same
       $string = preg_replace("/\r?\n/", "\n", $text);
       
       //splits the string on any html tags, preserving the tags and putting them in the $words array
       $words = preg_split("/(\s+)/", $text, -1, PREG_SPLIT_DELIM_CAPTURE);
       $total = count($words);

       $misSpelledWords = silpaspell_check_batch($silpa_spell_module,$text);

       if(empty($misSpelledWords))
       {
           echo 0;
	   return;
       }

       // Look for the misspelled words in original array and mark them with <span></span>
       for($i = 0; $i < $total; $i++)
       {
 	    if(in_array($words[$i],$misSpelledWords))
 	    {
 	    	  $words[$i] = '<span>'.$words[$i].'</span>';
 	    }
       }

       $return_string = "";
       
       // Convert the array into a string and return to js
       $return_string .= implode('',$words);

       echo $return_string;
       return;
   }


/*************************************************************
 * showSuggestions($word, $id)
 *
 * The showSuggestions function creates the list of up to 10
 * suggestions to return for the given misspelled word.
 *
 * $word - The misspelled word that was clicked on
 * $id - The id of the span containing the misspelled word.
 *
 *************************************************************/
function getSuggestions($word) {

	global $editablePersonalDict; //bool to set editability of personal dictionary
	global $silpa_spell_module; //the global link to the pspell module

	$retVal = "";

	//an array of all the suggestions that psepll returns for $word.
	$suggestions = silpaspell_suggest($silpa_spell_module, $word);

	// If the number of suggestions returned by pspell is less than the maximum
	// number, just use the number of suggestions returned.
	$numSuggestions = count($suggestions);
	$tmpNum = min($numSuggestions, MAX_SUGGESTIONS);

	if ($tmpNum > 0) {
		//this creates the table of suggestions.
		for ($i=0; $i<$tmpNum; $i++) {
			$retVal .= '<div class="suggestion">' . $suggestions[$i] . '</div>';
		}

		if ($editablePersonalDict) {
			$retVal .= '<div class="addToDictionary">Add To Dictionary</div>';
		}
	} else {
		$retVal .= "No Suggestions";
	}

	echo $retVal;  //the return value - a string containing the table of suggestions.

}
?>



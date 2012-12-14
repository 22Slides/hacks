<?

if ($_POST):

	$host = $_SERVER['HTTP_HOST'];
	include "../../config.php";
		
	// Get Data
	$to = $email;
	$return = $_POST['return'];
	$email = $_POST['email'];
	$body = "";
	foreach ($_POST as $key => $value):
	
		if ($key != "return" && $value):
		
			$label = ucwords(preg_replace('/\_/', ' ', $key));
			$body .= "$label: " . sanitize($value) . "\n";	
	
		endif;
	
	endforeach;
	
	if ($custom_domain): $title = "Message from $custom_domain";
	else: $title = "Message from $subdomain.$domain"; endif;
	
	mail($to, $title, $body, 'From: ' . $email);
	header('Location: /' . $return . '?message=sent');

else:

	header('Location: http://' . $address);

endif;

// Close Connection
mysql_close($database_connection);

?>

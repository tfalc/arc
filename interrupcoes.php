Titulo: <input type="text" name="titulo" value="<?php echo $titulo; ?>">

Data e hora: <input type="text" name="datahora" value="<?php echo $datahora; ?>">

Owner: <input type="text" name="owner" value="<?php echo $owner; ?>">

Owner: <input type="text" name="owner" value="<?php echo $owner; ?>">

Descrição: <textarea name="descricao" rows="5" cols="40"><?php echo $descricao; ?></textarea>

Tipo de atualização:
<input type="radio" name="tipoqueda" <?php if (isset($tipoqueda) && $tipoqueda == "queda") echo "checked"; ?> value="queda">❌ Queda
<input type="radio" name="tipoqueda" <?php if (isset($tipoqueda) && $tipoqueda == "normalizacao") echo "checked"; ?> value="normalizacao">✅ Normalização
<input type="radio" name="tipoqueda" <?php if (isset($tipoqueda) && $tipoqueda == "recorrente") echo "checked"; ?> value="recorrente">⚠️ Recorrente